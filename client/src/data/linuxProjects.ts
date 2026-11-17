import type { LinuxProject } from "../types";

export const linuxProjects: LinuxProject[] = [
  {
    id: "system-health-monitor",
    title: "System Health Monitor",
    subtitle:
      "A Bash-based CLI tool that tracks CPU, memory, disk, and network metrics in real time — with threshold alerts and structured logging.",
    year: "2026",
    technologies: ["Bash", "Linux", "Shell Scripting", "Cron", "/proc"],
    githubUrl: "https://github.com/preetisonule/system-health-monitor",
    overview:
      "System Health Monitor is a lightweight Linux utility built entirely in Bash. It reads live metrics from the /proc filesystem and standard Unix tools, evaluates them against configurable thresholds, and writes timestamped logs so you can spot resource spikes before they become outages.",
    functionalities: [
      "Real-time CPU usage tracking via /proc/stat with rolling averages",
      "Memory and swap monitoring with percentage-based alerts",
      "Disk space checks across all mounted partitions using df",
      "Network interface throughput sampling (RX/TX bytes per interval)",
      "Configurable warning & critical thresholds stored in a simple config file",
      "Color-coded terminal output for at-a-glance status (green / yellow / red)",
      "Automatic log rotation — keeps the last 7 days of health reports",
      "Cron-ready: runs every 5 minutes as a background health check",
    ],
    howItWorks:
      "The script runs in a continuous loop (or as a one-shot via cron). On each tick it parses /proc/stat for CPU jiffies, reads MemAvailable from /proc/meminfo, calls df for disk usage, and diffs /proc/net/dev for network throughput. Each metric is compared against thresholds defined in monitor.conf. When a value crosses a warning or critical boundary, the script prints a colored alert to stdout and appends a structured JSON line to logs/health.log. A companion status command reads the latest log entry and prints a human-readable summary — useful for quick SSH checks on remote servers.",
    code: `#!/usr/bin/env bash
# system_health_monitor.sh — Lightweight Linux health checker

set -euo pipefail

CONFIG="./monitor.conf"
LOG_DIR="./logs"
LOG_FILE="$LOG_DIR/health.log"
INTERVAL=5  # seconds between samples

# ── Threshold defaults (overridden by monitor.conf) ──
CPU_WARN=70;  CPU_CRIT=90
MEM_WARN=75;  MEM_CRIT=90
DISK_WARN=80; DISK_CRIT=95

source "$CONFIG" 2>/dev/null || true
mkdir -p "$LOG_DIR"

get_cpu_usage() {
  read -r _ user nice system idle < /proc/stat
  sleep 1
  read -r _ user2 nice2 system2 idle2 < /proc/stat
  local busy=$(( (user2 - user) + (system2 - system) ))
  local total=$(( busy + (idle2 - idle) ))
  echo "scale=1; $busy * 100 / $total" | bc
}

get_mem_usage() {
  local total avail
  total=$(grep MemTotal /proc/meminfo | awk '{print $2}')
  avail=$(grep MemAvailable /proc/meminfo | awk '{print $2}')
  echo "scale=1; ($total - $avail) * 100 / $total" | bc
}

get_disk_usage() {
  df -h / | awk 'NR==2 {print $5}' | tr -d '%'
}

log_metric() {
  local metric=$1 value=$2 status=$3
  echo "{\\"ts\\":\\"$(date -Iseconds)\\",\\"metric\\":\\"$metric\\",\\"value\\":$value,\\"status\\":\\"$status\\"}" >> "$LOG_FILE"
}

check_threshold() {
  local value=$1 warn=$2 crit=$3 name=$4
  if (( $(echo "$value >= $crit" | bc -l) )); then
    echo -e "\\033[0;31m[CRITICAL]\\033[0m $name: \${value}%"
    log_metric "$name" "$value" "critical"
  elif (( $(echo "$value >= $warn" | bc -l) )); then
    echo -e "\\033[0;33m[WARNING]\\033[0m  $name: \${value}%"
    log_metric "$name" "$value" "warning"
  else
    echo -e "\\033[0;32m[OK]\\033[0m       $name: \${value}%"
    log_metric "$name" "$value" "ok"
  fi
}

echo "=== System Health Monitor — $(date) ==="
check_threshold "$(get_cpu_usage)"  $CPU_WARN  $CPU_CRIT  "CPU"
check_threshold "$(get_mem_usage)"  $MEM_WARN  $MEM_CRIT  "Memory"
check_threshold "$(get_disk_usage)" $DISK_WARN $DISK_CRIT "Disk"
echo "Log written to $LOG_FILE"`,
    howToRun: [
      "Clone the repository: git clone https://github.com/preetisonule/system-health-monitor && cd system-health-monitor",
      "Make the script executable: chmod +x system_health_monitor.sh",
      "Edit monitor.conf to set your warning/critical thresholds (optional — defaults work out of the box)",
      "Run a one-shot health check: ./system_health_monitor.sh",
      "For continuous monitoring, add to crontab: */5 * * * * /path/to/system_health_monitor.sh",
      "View the latest status: tail -1 logs/health.log | python3 -m json.tool",
    ],
  },
];

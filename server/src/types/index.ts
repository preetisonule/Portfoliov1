// src/types/index.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ContactRequest extends ContactFormData {}
export interface ContactResponse extends ApiResponse {}
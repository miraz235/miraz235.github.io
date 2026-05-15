/**
 * Axios instance + typed endpoint helpers
 */

import axios from 'axios';
import type { AxiosInstance } from 'axios';
import emailjs from '@emailjs/browser';
import type { ContactInfo } from './types';

const API_URL = import.meta.env.VITE_API_URL || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 25000,
});

/**
 * Send email via EmailJS
 */
export const sendEmail = async (info: ContactInfo): Promise<void> => {
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, info as unknown as Record<string, unknown>, {
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  } catch (e) {
    console.log("Sending email with info:", info, { serviceId: EMAILJS_SERVICE_ID, templateId: EMAILJS_TEMPLATE_ID });
    console.error("EmailJS error:", e);
    throw e;
  }
};

/**
 * Send contact information
 */
export const sendContactInfo = async (info: ContactInfo): Promise<void> => {
  //return await apiClient.post('/contact', info);
  sendEmail(info);
};


export interface ConsentTemplate {
  id: string;
  name: string;
  version: string;
  status: 'draft' | 'published' | 'archived';
  content: ConsentContent;
  settings: ConsentSettings;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ConsentContent {
  sections: ConsentSection[];
  customization: {
    logo?: string;
    primaryColor?: string;
    fontFamily?: string;
  };
}

export interface ConsentSection {
  id: string;
  title: string;
  description: string;
  required: boolean;
  options: ConsentOption[];
}

export interface ConsentOption {
  id: string;
  label: string;
  description?: string;
  defaultValue: boolean;
}

export interface ConsentSettings {
  expiration?: number; // in days
  requiresExplicitConsent: boolean;
  allowWithdrawal: boolean;
  notifyOnUpdate: boolean;
  collectGeolocation: boolean;
  language: string[];
}
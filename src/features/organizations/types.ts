export interface Organization {
  id: string;
  name: string;
  plan: 'starter' | 'professional' | 'enterprise';
  settings: OrganizationSettings;
  features: FeatureFlags;
  limits: UsageLimits;
}

export interface OrganizationSettings {
  defaultLanguage: string;
  supportedLanguages: string[];
  branding: {
    logo?: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
  security: {
    mfa: boolean;
    ssoEnabled: boolean;
    ssoProvider?: string;
  };
}

export interface FeatureFlags {
  customBranding: boolean;
  apiAccess: boolean;
  advancedAnalytics: boolean;
  multiLanguage: boolean;
  auditLogs: boolean;
}
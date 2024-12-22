export interface DeploymentConfig {
  id: string;
  templateId: string;
  type: 'modal' | 'banner' | 'embedded';
  trigger: 'immediate' | 'scroll' | 'exit-intent';
  targeting: {
    regions?: string[];
    userTypes?: string[];
    urlPatterns?: string[];
  };
  styling: {
    position?: 'bottom' | 'top' | 'center';
    theme?: 'light' | 'dark';
    customCss?: string;
  };
}
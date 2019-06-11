export type Validatable = {
  error?: boolean;
  errorCount?: number | string;
  errorMessages?: string | string[];
  messages?: string | string[];
  rules?: ((...args: any[]) => boolean | string)[];
  success?: boolean;
  successMessages?: string | string[];
  validateOnBlur?: boolean;
};

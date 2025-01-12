export interface ApiRequestProps {
  method: string;
  endpoint: string;
  data?: object;
  params?: Record<string, string | number>;
}

import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

interface IConfig extends AxiosRequestConfig {
  url: string;
}

class HttpService {
  baseUrl: string;
  fetchingService: AxiosStatic;
  apiVersion: string;

  constructor(baseUrl = 'http://localhost:5000', apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private static populateTokenToHeaderConfig() {
    return {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    };
  }

  private static extractUrlAndDataFromConfig({
    ...configWithoutDataAndUrl
  }: IConfig) {
    return configWithoutDataAndUrl;
  }

  get(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...HttpService.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.get(
        this.getFullApiUrl(config.url),
        HttpService.extractUrlAndDataFromConfig(config),
    );
  }

  post(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...HttpService.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.post(
        this.getFullApiUrl(config.url),
        config.data,
        HttpService.extractUrlAndDataFromConfig(config),
    );
  }

  put(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...HttpService.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.put(
        this.getFullApiUrl(config.url),
        config.data,
        HttpService.extractUrlAndDataFromConfig(config));
  }

  delete(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...HttpService.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.delete(
        this.getFullApiUrl(config.url),
        HttpService.extractUrlAndDataFromConfig(config),
    );
  }
}

export default HttpService;
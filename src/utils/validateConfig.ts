// src/utils/validateConfig.ts

export interface CDPSDKConfig {
  apiKey?: string;
  network?: string;
  rpcUrl?: string;
}

export function validateCDPSDKConfig(config: CDPSDKConfig): void {
  if (!config.apiKey || config.apiKey.trim().length === 0) {
    throw new Error("CDP SDK config error: apiKey is required");
  }

  if (config.network && typeof config.network !== "string") {
    throw new Error("CDP SDK config error: network must be a string");
  }

  if (config.rpcUrl && !/^https?:\/\//.test(config.rpcUrl)) {
    throw new Error("CDP SDK config error: rpcUrl must be a valid http(s) URL");
  }
}

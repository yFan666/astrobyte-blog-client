'use client';

import { useState } from 'react';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  API_URL,
  API_VERSION,
  IS_DEVELOPMENT,
  ENABLE_DARK_MODE,
  ENABLE_COMMENTS,
  ENABLE_ANALYTICS,
} from '@/lib/env';

export function EnvDisplay() {
  const [isVisible, setIsVisible] = useState(false);

  const envVars = [
    { name: 'SITE_NAME', value: SITE_NAME },
    { name: 'SITE_URL', value: SITE_URL },
    { name: 'SITE_DESCRIPTION', value: SITE_DESCRIPTION },
    { name: 'API_URL', value: API_URL },
    { name: 'API_VERSION', value: API_VERSION },
    { name: 'IS_DEVELOPMENT', value: IS_DEVELOPMENT.toString() },
    { name: 'ENABLE_DARK_MODE', value: ENABLE_DARK_MODE.toString() },
    { name: 'ENABLE_COMMENTS', value: ENABLE_COMMENTS.toString() },
    { name: 'ENABLE_ANALYTICS', value: ENABLE_ANALYTICS.toString() },
  ];

  if (!IS_DEVELOPMENT) {
    return null; // 在生产环境中不显示
  }

  return (
    <div className="p-4 bg-muted rounded-lg mb-6 border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">环境变量</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          {isVisible ? '隐藏' : '显示'}
        </button>
      </div>

      {isVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-auto max-h-60">
          {envVars.map(({ name, value }) => (
            <div key={name} className="flex">
              <span className="font-mono text-xs bg-background px-2 py-1 rounded-l-md border-y border-l">
                {name}:
              </span>
              <span className="font-mono text-xs bg-card px-2 py-1 rounded-r-md flex-1 border-y border-r truncate">
                {value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

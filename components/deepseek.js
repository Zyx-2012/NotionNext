import { useEffect } from 'react';
import widgetConfig from '../conf/widget.config.js';

/**
 * DeepSeek API 集成组件
 * @returns
 */
const DeepSeek = () => {
  const deepSeekEnabled = widgetConfig.DEEPSEEK_ENABLED;
  const deepSeekApiKey = widgetConfig.DEEPSEEK_API_KEY;
  const deepSeekBaseUrl = widgetConfig.DEEPSEEK_BASE_URL;

  const loadDeepSeek = async () => {
    // 这里可以添加调用 DeepSeek API 的逻辑
    if (!deepSeekApiKey || !deepSeekBaseUrl) {
      console.error('DeepSeek API key or base URL is missing in site config.');
      return;
    }

    try {
      // 示例：使用 fetch 调用 DeepSeek API
      const response = await fetch(`${deepSeekBaseUrl}/your-api-endpoint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${deepSeekApiKey}`
        },
        body: JSON.stringify({
          // 这里可以添加请求的具体参数
          query: 'your query'
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('DeepSeek API response:', data);
      } else {
        console.error('DeepSeek API request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
    }
  };

  useEffect(() => {
    if (deepSeekEnabled) {
      loadDeepSeek();
    }
  }, [deepSeekEnabled]);

  return null;
};

export default DeepSeek;

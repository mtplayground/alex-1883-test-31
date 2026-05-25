import { defineConfig, loadEnv } from 'vite';

const parsePort = (value) => {
  if (!value) {
    return undefined;
  }

  const port = Number(value);
  return Number.isInteger(port) && port > 0 ? port : undefined;
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const devServerPort = parsePort(env.VITE_DEV_SERVER_PORT);

  return {
    server: {
      host: '0.0.0.0',
      port: devServerPort,
    },
    preview: {
      allowedHosts: ['.sprites.app'],
    },
  };
});

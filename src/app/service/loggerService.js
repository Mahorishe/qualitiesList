import * as Sentry from "@sentry/react";

const init = () => {
    Sentry.init({
        dsn: "https://37de0258bd794b27839b4d5f39728ee3@o4505177328451584.ingest.sentry.io/4505177329827840",
        integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
};

const log = (error) => {
    Sentry.captureException(error);
};

export const logger = {
    init,
    log,
};

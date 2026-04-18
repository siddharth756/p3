import app from './app'
import config from './config/config'
// import { initRateLimiter } from './config/rateLimiter'
// import databaseService from './service/databaseService'
import logger from './utils/logger'
const server = app.listen(config.PORT)

;(async () => {
    try {
        // Database connection
        // const connection = await databaseService.connect()
        // logger.info('DATABASE_CONNECTION', {
        //     meta: {
        //         CONNECTION_NAME: connection.name
        //     }
        // })

        // initRateLimiter(connection)
        // logger.info(`RATE_LIMITER_INITIATED`)

        logger.info('APPLICATION_STARTED', {
            meta: {
                PORT: config.PORT,
                SEVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        logger.error('APPLICATION_ERROR', {
            meta: error
        })
        server.close((error) => {
            if (error) {
                logger.error('APPLICATION_ERROR', {
                    meta: error
                })
            }
            process.exit(1)
        })
    }
})()

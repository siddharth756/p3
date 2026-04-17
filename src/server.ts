/* eslint-disable no-console */
import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        console.info('APPLICATION_STARTED', {
            meta: {
                PORT: config.PORT,
                SEVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        console.error('APPLICATION_ERROR', {
            meta: error
        })
        server.close((error) => {
            if (error) {
                console.error('APPLICATION_ERROR', {
                    meta: error
                })
            }
            process.exit(1)
        })
    }
})()

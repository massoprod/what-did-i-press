// @ts-ignore
import styles from '../styles/Home.module.scss'
import Console from '../components/Console'
import KeyListenerContainer from '../components/KeyListenerContainer'
import Meta from '../components/Meta'
import Output from '../components/Output'
import { formatReadableEvent } from '../utils/utils'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <div className={styles.headerWrapper}>
          <img
            src="/keyboard.png"
            className={styles.headerImage}
            alt="Keyboard"
          />
          <h1 className={styles.title}>
            What did I press? 
          </h1>

          <p className={styles.description}>
            start by pressing any key on the keyboard
          </p>
        </div>

        <div style={{ marginTop: 30 }}>
          <KeyListenerContainer>
            {params => (
              <Console
                info={params.keyInfo}
              />
            )}
          </KeyListenerContainer>
        </div>
      </main>

      <KeyListenerContainer>
        {params => (
          <Output output={formatReadableEvent(params.keyInfo.output)} />
        )}
      </KeyListenerContainer>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://masso.sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by{' '}
            <img
              src="https://masso.sk/_next/static/images/logo_main-c93cc7869fc2c2f29b3faa446d466448.png"
              alt="Masso dev. logo"
              className={styles.logo}
            />
          </a>
        </div>

        <div className={styles.github}>
          <a
            href="https://github.com/massoprod/what-did-i-press"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github project
          </a>
        </div>
      </footer>
    </div>
  )
}

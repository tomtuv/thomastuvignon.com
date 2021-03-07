import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  fr: "Français",
  en: "English",
}

const Languages = () => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }) => (
      <ul>
        {languages.map(language => (
          <li key={language}>
            <button
              className={currentLocale === language ? "active" : ""}
              onClick={() => changeLocale(language)}
            >
              {languageName[language]}
            </button>
          </li>
        ))}
      </ul>
    )}
  </IntlContextConsumer>
)

export default Languages

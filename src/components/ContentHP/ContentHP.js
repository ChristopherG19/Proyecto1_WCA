import React from 'react'
import './ContentHP.css'

const ContentHP = () => (
  <div className="content-home">
    <div className="segment-news">
      <div className="content-columns">
        <div className="row">
          <div className="column">
            <h2 className="column-header">Últimas noticias</h2>
            <div className="divider" />
            <div className="post-content">
              <div className="content-row">
                <h3 className="column-header">
                  <a href="https://www.worldcubeassociation.org/posts/wca-regulations-june-2022">WCA Regulations - June 2022</a>
                </h3>
                <div className="extra">
                  Anunciado por Rui Reis el
                  <span className="wca-local-time" data-utc-time="2022-05-20T06:43:11Z" data-locale="es"> viernes, 20 de mayo de 2022, 0:43 GTM-6</span>
                </div>
                <div className="description-column">
                  <p>Dear WCA Community,</p>
                  <p>The WRC would like to inform you about the versions of the WCA Regulations and Guidelines, which are going into effect June 1, 2022.</p>
                  <p>
                    You can review all changes in
                    <a href="https://github.com/thewca/wca-regulations/pull/1042/files"> this comparison on Github</a>
                    . You can click on “Files changed” to see the complete files of the Regulation and Guidelines, where all changes and additions are marked green and removals are red.
                  </p>
                </div>
              </div>
              <a className="btnblue" href="https://www.worldcubeassociation.org/posts/wca-regulations-june-2022">Saber más</a>
            </div>
          </div>
          <div className="column">
            <h2 className="column-header">Anuncios</h2>
            <div className="divider" />
            <div className="column-list">
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/wca-regulations-june-2022">
                  <a className="dot">■ </a>
                  WCA Regulations - June 2022
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-wrc-members-may-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WRC Members (May 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-wsot-leader-may-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WSOT Leader (May 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-wat-leader-may-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WAT Leader (May 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-weat-members-april-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WEAT Members (April 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/senior-delegate-announcement-latin-america-march-2022">
                  <a className="dot">■ </a>
                  Senior Delegate Announcement - Latin America (March 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/applications-for-wca-continental-championships-2024">
                  <a className="dot">■ </a>
                  Applications for WCA Continental Championships 2024
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/wca-action-regarding-situation-in-ukraine-march-2022">
                  <a className="dot">■ </a>
                  WCA action regarding situation in Ukraine (March 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-wmt-members-february-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WMT Members (February 2022)
                </a>
              </div>
              <div className="item-list">
                <a href="https://www.worldcubeassociation.org/posts/call-for-applicants-wac-community-and-staff-representatives-january-2022">
                  <a className="dot">■ </a>
                  Call for Applicants - WAC Community and Staff Representatives (January 2022)
                </a>
              </div>
              <a className="btnblue" href="https://www.worldcubeassociation.org/posts">Ver todos los anuncios</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-bottom">
      <div className="column red">
        <div className="box">
          <h2 className="headerbox">Contacto</h2>
          <p>
            Si deseas ponerte en contacto con nosotros, puedes hacerlo a través de nuestro formulario de contacto. Si tienes alguna pregunta sobre los distintos procesos de la WCA, ¡asegúrate de revisar nuestro
            <a href="https://www.worldcubeassociation.org/faq"> Preguntas más frecuentes</a>
            !
          </p>
          <a className="btnred" href="https://www.worldcubeassociation.org/contact">Llévame al fomulario de Contacto de la WCA</a>
        </div>
      </div>
      <div className="column yellow">
        <div className="box">
          <h2 className="headerbox">Apoyo a la WCA</h2>
          <p>
            La World Cube Association es una organización 501(c)(3) exenta de impuestos. Al ser 100% mantenida por voluntarios y sin ánimo de lucro, agradecemos vuestras donaciones para ayudarnos a que nuestra visión llegue más lejos y a que se disfrute más en competiciones por todo el mundo.
          </p>
          <a className="btnyellow" href="https://www.worldcubeassociation.org/about#contribute">Saber más sobre como puedes apoyar a la WCA</a>
        </div>
      </div>
    </div>
  </div>
)

export default ContentHP

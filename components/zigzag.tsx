export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div
              className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Use
              a TI a seu favor
            </div>
            <h1 className="h2 mb-4">Nossas soluções</h1>
            <p className="text-xl text-gray-400">Serviços para todos os estágios e tamanhos de empresas.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src="/images/features-03-image-01.jpg"
                     style={{ width: 540, height: 405 }}
                     alt="Features 01"/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                   data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-bandung text-xl text-blue-600 mb-2">Investimento eficiente</div>
                  <h3 className="h3 mb-3">Consultoria de Desenvolvimento</h3>
                  <p className="text-xl text-gray-400 mb-4">Equipes integradas do tamanho ideal para acelerar seu
                    projeto.
                    Composição personalizada para atender as necessidades da sua empresa.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Equipe integrada e especializada</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Composição personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Especialidades diversas</span>
                    </li>

                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Contratação por hora ou demanda</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                   data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src="/images/features-03-image-02.jpg"
                     style={{ width: 540, height: 405 }}
                     alt="Features 02"/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                   data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-bandung text-xl text-blue-600 mb-2">Controle de Riscos</div>
                  <h3 className="h3 mb-3">Consultoria LGPD</h3>
                  <p className="text-xl text-gray-400 mb-4">Conte conosco para garantir que sua empresa está de acordo
                    com as demandas
                    regulatórias jurídicas e técnicas.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Consultoria Jurídica</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Proteção de Dados</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Gerenciamento de Riscos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src="/images/features-03-image-03.png"
                     style={{ width: 540, height: 405 }}
                     alt="Features 03"/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                   data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-bandung text-xl text-blue-600 mb-2">Aumento de produtividade.</div>
                  <h3 className="h3 mb-3">DevOps</h3>
                  <p className="text-xl text-gray-400 mb-4">Estabeleça práticas de DevOps na cultura de desenvolvimento
                    da sua empresa.
                    Automatize testes, integração e deploy para acelerar o ciclo de desenvolvimento.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Treinamento Técnico</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Implementação de esteira de CI/CD</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                      </svg>
                      <span>Implementação e gerenciamento de ambiente de cloud</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

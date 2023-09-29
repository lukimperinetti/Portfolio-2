import Image from "next/image";
import avatarluk from "../public/avatar-removebg.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import design from "../public/size.jpg";
import code from "../public/crane.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <div>
      <head>
        <title>Luk Imperinetti</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className="bg-custom px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-comfortaa text-customcompl2">
              Luk IMPERINETTI
            </h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r bg-customcompl  text-teal-700 px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Mon CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa md:text-6xl">
              Développeur FullStack
            </h2>
            {/* <p className="text-2cl py-2 leading-8 text-customcompl2 md:text-3xl">
              Texte a modifier plus tard
            </p> */}
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-customcompl2">
            {/* <AiFillTwitterCircle className="cursor-pointer" /> */}
            <a href="https://github.com/lukimperinetti" target="blank">
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/luk-imperinetti-0a4385119/"
              target="blank"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-customcompl to-customcompl2 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-85 md:w-85">
            <Image
              src={avatarluk}
              alt="dev-ed"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* body section */}

        <section>
          <div>
            <h3 className="text-3xl py-10 text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
              A propos de moi
            </h3>
            <p className="text-2cl py-2 leading-8 text-customcompl2">
              Actuellement étudiant en{" "}
              <spans className="text-teal-700">
                <a
                  href="https://www.epitech.eu/fr/formations/msc-pro-epitech-technology/"
                  target="blank"
                  className="cursor-pointer"
                >
                  {" "}
                  Master à Epitech{" "}
                </a>
              </spans>{" "}
              , je suis à la recherche d'une alternance de deux ans à partir du
              2 janvier 2024. Passionné par le code, j'ai déjà acquis une solide
              base de compétences techniques et je suis prêt à relever de
              nouveaux défis. Mon objectif est de combiner mes connaissances en
              développement avec une expérience professionnelle enrichissante !
              Si vous recherchez un candidat déterminé à contribuer au succès de
              votre entreprise tout en continuant son apprentissage, n'hésitez
              pas à
              <spans className="text-teal-700">
                <a
                  href="https://www.linkedin.com/in/luk-imperinetti-0a4385119/"
                  target="blank"
                  className="cursor-pointer"
                >
                  {" "}
                  me contacter{" "}
                </a>
              </spans>{" "}
              !
            </p>
          </div>
          {/* Afficher mon parcours d'apprentissage step by step : Autodidacte, Wac, MSC */}
          <h3 className="text-3xl py-10 text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
            Expériences Pro
          </h3>
          <div className="lg:flex gap-5 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-customcompl to-customcompl2">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h4 className="text-xl font-comfortaa pt-8 pb-2">
                Développeur FullStack
              </h4>
              <p className="font-comfortaa text-sm">
                J'ai travaillé en tant que développeur FullStack pour la <br />
                société
                <spans className="text-teal-700">
                  <a
                    href="https://www.size-factory.com/"
                    target="blank"
                    className="cursor-pointer"
                  >
                    {" "}
                    Enyom Distribution{" "}
                  </a>
                </spans>
                pendant 1 an a Paris.
                <br /> J'ai pu travailler sur des projets différents, du
                développement d'écrans <br />
                web aidant a la gestion de l'entreprise, de l'intégration web,
                en <br />
                passant par le déploiement et la maintenance du logiciel de
                caisse en magasin.
              </p>
              <h5 className="text-lg font-comfortaa pt-8 pb-2">
                Technologies utilisées :{" "}
              </h5>
              <ul className="font-comfortaa text-sm">
                <li>Symfony 4 | Twig</li>
                <li>MySQL</li>
                <li>API : Google MyBusiness, Keyyo, Truspilot</li>
                <li>Prestashop | Wordpress</li>
              </ul>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-customcompl to-customcompl2">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h4 className="text-xl font-comfortaa pt-8 pb-2">Freelance</h4>
              <p className="font-comfortaa text-sm">
                J'ai travaillé en tant que{" "}
                <spans className="text-teal-700">
                  <a
                    href="https://www.malt.fr/profile/lukimperinetti"
                    target="blank"
                    className="cursor-pointer"
                  >
                    {" "}
                    développeur freelance{" "}
                  </a>
                </spans>
                <br />
                dès la fin de mon alternance.
                <br /> J'ai pu développer des compétences de gestion d'équipe,
                d'animation de <br /> réunions en plus de mes compétences
                techniques. <br />
                J'ai travallé sur beaucoup de petits projets de maintenance et
                d'integration, mais aussi <br /> sur un projet plus conséquent
                de création from-scratch d'une market place.,
              </p>
              <h5 className="text-lg font-comfortaa pt-8 pb-2">
                Technologies utilisées :{" "}
              </h5>
              <ul className="font-comfortaa text-sm">
                <li>Stack MERN</li>
                <li>Wordpress</li>
                <li>HTML | CSS</li>
                <li>Déploimement de site</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-3xl py-10 text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
              Formations
            </h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <ol className="relative border-l border-customcompl">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-customcompl2 rounded-full mt-1.5 -left-1.5 border border-customcompl2"></div>
                  <time className="mb-1 text-sm font-comfortaa leading-none text-customcompl2">
                    2023 - 2026
                  </time>
                  <h3 class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
                    Master of Sicence - Epitech Montpellier
                  </h3>
                  <p class="mb-4 text-base font-normal text-customcompl2">
                    Titre d'expert des systèmes de l'information.
                    <br />
                    Approfondissement des compétences techniques, spécialisation
                    en 3ème année.
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-customcompl2 rounded-full mt-1.5 -left-1.5 border border-customcompl2"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-customcompl2">
                    2019-2021
                  </time>
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
                    WebAcadémie by Epitech - Paris
                  </h3>
                  <p className="text-base font-normal text-customcompl2 ">
                    Titre de développeur/intégrateur web RNCP niveau 5.
                    <br /> Cette formation se déroule sur 2 ans, dont une année
                    en alternance.
                    <br /> Apprentissage des différents langages du web et des
                    bonnes pratiques de développement.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-customcompl2 rounded-full mt-1.5 -left-1.5 border border-customcompl2"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-customcompl2 ">
                    Depuis toujours
                  </time>
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
                    Autodidacte
                  </h3>
                  <p className="text-base font-normal text-customcompl2 ">
                    Depuis toujours je suis passionné par l'informatique et le
                    code.
                    <br /> J'ai appris à coder en autodidacte, en suivant des
                    tutoriels et en réalisant des projets personnels grace,
                    nottement, a Udémy, OpenClassroom et Youtube.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-10 text-transparent bg-clip-text bg-gradient-to-r from-customcompl to-customcompl2 font-comfortaa">
              Portfolio
            </h3>
            <p className="text-2cl py-2 leading-8 text-customcompl2">
              Voici mes différents
              <spans className="text-teal-500"> projets</spans> réalisés pour
              l'école et en autodidacte
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

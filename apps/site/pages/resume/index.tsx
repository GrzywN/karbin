import { Heading, Paper, Separator, Text } from '@karbin/shared/ui';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from '@tabler/icons';
import Image from 'next/image';

import imageKarolBinkowski from '../../public/images/avatars/KarolBinkowski.png';
import imageLogoBorKur from '../../public/images/logos/logoBorKur.svg';
import imageLogoKarbin from '../../public/images/logos/logoKarbin.svg';
import imageLogoPasja from '../../public/images/logos/logoPasja.png';
import imageLogoTzn from '../../public/images/logos/logoTzn.jpg';

export function Resume() {
  return (
    <div className="">
      <Paper
        className="p-12 flex flex-col"
        as="article"
        color="light"
        hasBorder
      >
        <div className="flex gap-8 mb-8">
          <Image
            className="rounded-full border-4 border-primary-300 shadow-2xl w-72 h-72 lg:block"
            src={imageKarolBinkowski}
            alt="Karol Binkowski"
            priority
          />
          <div className="w-full h-full grid">
            <Heading as="h1" color="dark" size="lg" weight="bold">
              Karol Binkowski
            </Heading>
            <Text>Junior React Frontend Developer</Text>
            <Separator className="my-3" size="xl" />
            <div className="flex gap-6">
              <div className="flex flex-col gap-3">
                <Heading as="h2" size="sm">
                  About me
                </Heading>
                <Text size="xs" weight="medium">
                  <strong>Hello</strong> 👋 I am a{' '}
                  <strong>Junior Front-end developer</strong> strongly focused
                  on <strong>React</strong> apps development, but I can adapt to
                  whatever tools are required.
                </Text>
              </div>
              <div className="ml-auto flex flex-col gap-3">
                <Heading as="h2" size="sm">
                  Connect with me
                </Heading>
                <div>
                  <ul className="grid gap-2">
                    <li className="inline-flex gap-1 items-center underline underline-offset-2">
                      <IconBrandGithub />
                      <Text size="sm">GitHub</Text>
                    </li>
                    <li className="inline-flex gap-1 items-center underline underline-offset-2">
                      <IconBrandLinkedin />
                      <Text size="sm">LinkedIn</Text>
                    </li>
                    <li className="inline-flex gap-1 items-center underline underline-offset-2">
                      <IconMail />
                      <Text
                        as="a"
                        href="mailto:karolbinkowski3@proton.me"
                        link
                        size="sm"
                      >
                        karolbinkowski3@proton.me
                      </Text>
                    </li>
                    <li className="inline-flex gap-1 items-center underline underline-offset-2">
                      <IconPhone />
                      <Text as="a" href="tel:+48517817681" size="sm">
                        +48 517 817 681
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator size="xl" />
        <div className="flex flex-col gap-8 my-8">
          <Heading as="h2" color="dark" size="lg" weight="bold">
            Experience
          </Heading>
          <div className="grid gap-12">
            <div className="inline-flex gap-4">
              <Image
                className="rounded-full shadow-2xl w-16 h-16 p-2"
                src={imageLogoKarbin}
                alt="karolbinkowski.me"
                priority
              />
              <div className="flex flex-col">
                <Text size="xs">02/2022 - now</Text>
                <Text size="md">
                  <strong>karolbinkowski.me</strong> - A modular, monorepo-based
                  Digital Garden.
                </Text>
                <ul className="mt-3 list-disc">
                  <li>
                    <Text size="xs" weight="medium">
                      Building a modular and monorepo-based website powered by a
                      dedicated design system,
                      <br /> which represents my personal brand in a
                      professional manner.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Ensuring a consistent and cohesive user experience across
                      different sections of the website by implementing a design
                      system specifically created for this project.
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-flex gap-4">
              <Image
                className="rounded-full shadow-2xl w-16 h-16 p-2"
                src={imageLogoPasja}
                alt="Studio Fryzur Pasja"
                priority
              />
              <div className="flex flex-col">
                <Text size="xs">09/2022 - 02/2023</Text>
                <Text size="md">
                  <strong>studiofryzurpasja.pl</strong> - A local business
                  hairdresser's website.
                </Text>
                <ul className="mt-3 list-disc">
                  <li>
                    <Text size="xs" weight="medium">
                      Designed and developed a landing page for Studio Fryzur
                      "Pasja", a local hair salon.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Created a sleek and modern design to provide an engaging
                      user experience.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Optimized the landing page for performance and
                      responsiveness.
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-flex gap-4">
              <Image
                className="rounded-full shadow-2xl w-16 h-16 p-2"
                src={imageLogoBorKur}
                alt="BOR-KUR.pl"
                priority
              />
              <div className="flex flex-col">
                <Text size="xs">10/2022 - 11/2022</Text>
                <Text size="md">
                  <strong>BOR-KUR.pl</strong> - A website for the BOR-KUR
                  chicken farm business.
                </Text>
                <ul className="mt-3 list-disc">
                  <li>
                    <Text size="xs" weight="medium">
                      Developed and deployed a website for BOR-KUR's poultry
                      farm.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Implemented Google Maps integration to facilitate
                      potential customers in locating the farm.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Added a dark mode option to enhance visual comfort for
                      users.
                    </Text>
                  </li>
                  <li>
                    <Text size="xs" weight="medium">
                      Enabled multilingual functionality to cater to diverse
                      audiences.
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator size="xl" />
        <div className="flex flex-col gap-8 my-8">
          <div className="grid grid-cols-2 items-start">
            <div className="grid gap-1">
              <Heading as="h3">Technical skills</Heading>
              <ul className="mt-3 list-disc grid gap-2">
                <li>
                  <Text>HTML and CSS</Text>
                </li>
                <li>
                  <Text>JavaScript and TypeScript</Text>
                </li>
                <li>
                  <Text>React</Text>
                </li>
                <li>
                  <Text>Next.js</Text>
                </li>
                <li>
                  <Text>Jest | Testing Library | Cypress</Text>
                </li>
                <li>
                  <Text>Git | GitHub</Text>
                </li>
              </ul>
            </div>
            <div className="grid gap-1">
              <Heading as="h3">Knowledge of</Heading>
              <ul className="mt-3 list-disc grid gap-2">
                <li>
                  <Text>Atomic Design</Text>
                </li>
                <li>
                  <Text>BEM methodology</Text>
                </li>
                <li>
                  <Text>Design patterns</Text>
                </li>
                <li>
                  <Text>Design systems</Text>
                </li>
                <li>
                  <Text>Responsive Web Design</Text>
                </li>
                <li>
                  <Text>Test-driven development</Text>
                </li>
                <li>
                  <Text>Web accessibility</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separator size="xl" />
        <div className="flex flex-col gap-8 my-8">
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-8 col-span-2">
              <Heading as="h3">Education</Heading>
              <div className="inline-flex gap-4">
                <Image
                  className="rounded-full shadow-2xl w-16 h-16 p-2 object-cover"
                  src={imageLogoTzn}
                  alt="Techniczne Zakłady Naukowe"
                  priority
                />
                <div className="flex flex-col">
                  <Text size="xs">09/2022 - now</Text>
                  <Text size="md" weight="bold">
                    Technical High School (TZN Częstochowa)
                  </Text>
                  <Text size="sm">
                    <em>IT Specialist (INF.02, INF.03)</em>
                  </Text>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Heading as="h3">Languages</Heading>
              <ul className="mt-8 list-disc grid gap-1">
                <li>
                  <Text>English (B2/C1)</Text>
                </li>
                <li>
                  <Text>Polish (Native)</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Resume;

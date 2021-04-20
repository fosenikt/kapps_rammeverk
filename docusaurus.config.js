/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kapps rammeverk',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fosenikt', // Usually your GitHub org/user name.
  projectName: 'KappsFramework', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kapps Rammeverk',
      logo: {
        alt: 'Kapps logo',
        src: 'img/kapps_no.svg',
      },
      items: [
        /* {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Rammeverket',
        }, */
        {
          href: 'https://kapps.no',
          label: 'Kapps.no',
          position: 'right',
        },
        {
          href: 'https://github.com/fosenikt/kapps_rammeverk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Rammeverket',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Kapps.no',
              href: 'https://kapps.no',
            },
            {
              label: 'OneTeamGov Slack',
              href: 'https://app.slack.com/client/TC8Q2QTDX',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fosenikt/kapps_rammeverk',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Kapps.no`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		  routeBasePath: '/', // <-- Added to make docs the main page
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fosenikt/kapps_rammeverk/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

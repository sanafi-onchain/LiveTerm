// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  return `Welcome to Sanafi Onchain Terminal! Available commands:

- help: Show this help message
- news: Get the latest Sanafi Onchain updates and announcements

[tab]: trigger completion.
[clear]: clear terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ███████╗ █████╗ ███╗   ██╗ █████╗ ███████╗██╗
 ██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██║
 ███████╗███████║██╔██╗ ██║███████║█████╗  ██║
 ╚════██║██╔══██║██║╚██╗██║██╔══██║██╔══╝  ██║
 ███████║██║  ██║██║ ╚████║██║  ██║██║     ██║
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝
                                              
AI-Driven Ethical Onchain Banking

Type 'help' to see the list of available commands.
Type 'news' to see the Sanafi <span class="text-red-500 font-bold">BREAKING NEWS</span>
`;
};

// News data structure - This is the refactored part that organizes all news content in a JSON structure
const newsData = [
  {
    id: 'io',
    title: 'IO.NET PARTNERS WITH SANAFI ONCHAIN',
    description:
      'IO.NET now provides enterprise-grade Cloud and AI infrastructure support for all Sanafi blockchain solutions, enabling unprecedented scalability.',
    date: 'June 12, 2025',
    isHot: true,
    category: 'PARTNERSHIP DETAILS',
    categoryColor: 'blue-600',
    secondaryTitle: 'IO.NET x SANAFI ONCHAIN',
    secondaryTitleColor: 'green-400',
    detailsPrompt: "Type 'news io' for more details on this partnership",
    fullContent: `Sanafi Onchain and IO.NET have announced a groundbreaking strategic partnership that will 
revolutionize blockchain infrastructure. This collaboration marks a significant milestone
in the development of secure, scalable, and ethical blockchain solutions.

<span class="text-white font-bold">Key Benefits:</span>

<span class="text-green-400">✓</span> Enhanced Security: IO.NET's advanced cloud security protocols integrated with Sanafi's
  blockchain to provide institutional-grade protection for all transactions and assets.

<span class="text-green-400">✓</span> AI-Powered Analytics: Cutting-edge machine learning algorithms to detect patterns,
  predict market trends, and optimize smart contract execution.

<span class="text-green-400">✓</span> Unlimited Scalability: Enterprise-level infrastructure capable of handling millions
  of transactions per second without compromising performance.

<span class="text-green-400">✓</span> Reduced Carbon Footprint: IO.NET's energy-efficient cloud solutions align perfectly
  with Sanafi's commitment to ethical and sustainable blockchain technology.

<span class="text-blue-400">→ This partnership represents the future of ethical finance on the blockchain.</span>

<span class="text-white font-bold">For investors:</span> Early adopters will gain preferential access to upcoming features.
<span class="text-white font-bold">For developers:</span> New API documentation will be released next week.`,
  },
  {
    id: 'sep',
    title: 'Sanafi launches SEP',
    description:
      'Introducing Sanafi Ethical Products: Revolutionizing Ethical Finance on the Blockchain.',
    date: 'June 11, 2025',
    isHot: false,
    category: 'PRODUCT LAUNCH',
    categoryColor: 'green-600',
    secondaryTitle: 'SANAFI ETHICAL PRODUCTS (SEP)',
    secondaryTitleColor: 'yellow-300',
    detailsPrompt: "Type 'news sep' to learn about Sanafi Ethical Products",
    fullContent: `Sanafi Onchain proudly introduces Sanafi Ethical Products (SEP), a revolutionary
suite of financial instruments designed to align blockchain technology with ethical
principles and sustainable development goals.

<span class="text-white font-bold">SEP Features:</span>

<span class="text-green-400">✓</span> <span class="text-white font-bold">Ethical Smart Contracts:</span> Automated enforcement of ethical guidelines in all transactions.

<span class="text-green-400">✓</span> <span class="text-white font-bold">Transparency Portal:</span> Real-time tracking of how funds are utilized across projects.

<span class="text-green-400">✓</span> <span class="text-white font-bold">Impact Metrics:</span> Quantifiable measurements of social and environmental benefits.

<span class="text-green-400">✓</span> <span class="text-white font-bold">Community Governance:</span> Democratic decision-making process for product evolution.

<span class="text-yellow-300 font-bold">Initial Product Offerings:</span>

- <span class="text-blue-400">Ethical DeFi Lending</span>: Fair-interest loans with transparent terms
- <span class="text-blue-400">Green Investment Pools</span>: Funding for sustainable energy projects
- <span class="text-blue-400">Social Impact Bonds</span>: Supporting education and healthcare initiatives`,
  },
  {
    id: 'sef',
    title: 'Sanafi launches SEF',
    description: 'Introducing Sanafi Ethical Flywheel with $SANA & $SanaSOL',
    date: 'June 1, 2025',
    isHot: false,
    category: 'TOKENOMICS',
    categoryColor: 'purple-600',
    secondaryTitle: 'SANAFI ETHICAL FLYWHEEL (SEF)',
    secondaryTitleColor: 'yellow-300',
    detailsPrompt: "Type 'news sef' to explore SEF and tokenomics",
    fullContent: `Sanafi Onchain introduces the Sanafi Ethical Flywheel (SEF), a revolutionary tokenomic
model designed to create a self-sustaining ecosystem that rewards ethical participation
and drives continuous growth.

<span class="text-white font-bold">Dual Token System:</span>

<span class="text-green-300 font-bold">$SANA</span> - Governance token
- Used for voting on protocol decisions
- Staking rewards for platform security
- Fee discounts across the Sanafi ecosystem
- Initial supply: 100 million tokens

<span class="text-yellow-300 font-bold">$SanaSOL</span> - Utility token
- Transaction medium within the ecosystem
- Rewards for ethical participation
- Backed by a basket of sustainable assets
- Deflationary mechanism: 2% of all transactions burned

<span class="text-white font-bold">Flywheel Effect:</span>
As more users participate ethically → More value generated → Higher rewards distributed →
Attracts more users → Greater network effects → Ecosystem expansion

<span class="text-blue-400">Token launch details coming soon. Join our waitlist for early access privileges.</span>`,
  },
  {
    id: 'creation',
    title: 'Sanafi is created & Join Colosseum Hackathon',
    description: 'Sanafi is created & Join Colosseum Hackathon.',
    date: 'May 16, 2025',
    isHot: false,
    category: 'ANNOUNCEMENT',
    categoryColor: 'gray-600',
    secondaryTitle: 'PROJECT LAUNCH',
    secondaryTitleColor: 'blue-300',
    detailsPrompt: '',
  },
];

// News
export const news = async (args: string[]): Promise<string> => {
  // Sub-pages for detailed news topics
  if (args.length > 0) {
    const topic = args[0].toLowerCase();
    const newsItem = newsData.find((item) => item.id === topic);

    if (newsItem) {
      if (!newsItem.fullContent) {
        return `No detailed information available for this topic.
Type 'news' to return to the main news page`;
      }

      return `
<span class="text-white bg-${newsItem.categoryColor} px-1 font-bold">${
        newsItem.category
      }</span> <span class="text-${newsItem.secondaryTitleColor} font-bold">${
        newsItem.secondaryTitle
      }</span>
${'='.repeat(newsItem.secondaryTitle.length + newsItem.category.length + 10)}

<span class="text-yellow-300 font-bold">[${newsItem.date}]</span>

${newsItem.fullContent}

<span class="text-blue-400 underline">Type 'news' to return to the main news page</span>
`;
    }

    return `Unknown news topic. Available topics: ${newsData
      .filter((item) => item.detailsPrompt)
      .map((item) => item.id)
      .join(', ')}.
Type 'news' without arguments to see all recent updates.`;
  }

  // Main news page (default)
  let output = `
<span class="text-white bg-red-500 px-1 font-bold">BREAKING NEWS</span> <span class="text-green-400 font-bold">SANAFI ONCHAIN UPDATES</span>
====================================================================

`;

  // Add each news item to the output
  for (const item of newsData) {
    output += `📢 `;

    if (item.isHot) {
      output += `<span class="text-red-500 font-bold blink">★ HOT ★</span> `;
    }

    output += `<span class="text-yellow-300 font-bold">[${item.date}] ${item.title}</span>
   ${item.description}
`;

    if (item.detailsPrompt) {
      // output += `<span class="text-blue-400">→ ${item.detailsPrompt}</span>
      output += `
`;
    } else {
      output += `
`;
    }
  }

  output += `
<span class="text-white">For more information, join our community:</span>
- <a 
    class="text-blue-400 underline hover:scale-105 focus:scale-105 hover:font-bold focus:font-bold hover:text-blue-300 focus:text-blue-300 transition-all transform duration-200 cursor-pointer inline-block" 
    href="https://x.com/sanafionchain" 
    target="_blank"
    tabindex="0"
  >X: @sanafionchain</a>
- <a 
    class="text-blue-400 underline hover:scale-105 focus:scale-105 hover:font-bold focus:font-bold hover:text-blue-300 focus:text-blue-300 transition-all transform duration-200 cursor-pointer inline-block" 
    href="https://x.com/i/communities/1932413895840579952" 
    target="_blank"
    tabindex="0"
  >X Community</a>
- <a 
    class="text-blue-400 underline hover:scale-105 focus:scale-105 hover:font-bold focus:font-bold hover:text-blue-300 focus:text-blue-300 transition-all transform duration-200 cursor-pointer inline-block" 
    href="https://t.me/sanafionchain" 
    target="_blank"
    tabindex="0"
  >Telegram: t.me/sanafionchain</a>
`;

  return output;
};

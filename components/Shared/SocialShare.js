import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

const SocialShare = () => {
  const socialShareClickHandler = async (event) => {
    const name = event.target.parentNode.getAttribute('data-click-name');

    const target = event.target.parentNode.getAttribute('data-click-target');

    console.log(name, target);
    gtag('event', 'social_share', {
      platform: name,
    });
  };

  return (
    <div
      style={{ background: 'linear-gradient(35deg, #1F97BF 20%, #FF9321 90%)' }}
    >
      <div className='mx-auto max-w-prose px-6 py-16 lg:py-20 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <div className='prose prose-lg mb-4 text-center'>
          <h3 className='text-white font-medium text-2xl'>
            Share The Knowledge
          </h3>
        </div>
        <div className='flex gap-3 items-center justify-center mx-auto'>
          <FacebookShareButton
            url='https://ps-library.vercel.app/lessons/sustainability-part-1'
            hashtag={['#sustainability', '#sustainablepackaging']}
            quote='In part 1 we define &#8220;carbon neutral&#8221; and look at real-world examples of carbon offset in the industry.'
            onClick={socialShareClickHandler}
            data-click-target='social_share'
            data-click-name='Facebook'
          >
            <FacebookIcon round size={50} />
          </FacebookShareButton>
          <LinkedinShareButton
            url='https://ps-library.vercel.app/lessons/sustainability-part-1'
            title='Sustainability - Part 1'
            source='PackagingSchool.com'
            summary='In part 1 we define &#8220;carbon neutral&#8221; and look at real-world examples of carbon offset in the industry.'
            onClick={socialShareClickHandler}
            data-click-target='social_share'
            data-click-name='LinkedIn'
          >
            <LinkedinIcon round size={50} />
          </LinkedinShareButton>
          <TwitterShareButton url='https://ps-library.vercel.app/lessons/sustainability-part-1'>
            <TwitterIcon round size={50} />
          </TwitterShareButton>
          <RedditShareButton
            url='https://ps-library.vercel.app/lessons/sustainability-part-1'
            title='Sustainability - Part 1'
            onClick={socialShareClickHandler}
            data-click-target='social_share'
            data-click-name='Reddit'
          >
            <RedditIcon round size={50} />
          </RedditShareButton>
          <EmailShareButton
            url='https://ps-library.vercel.app/lessons/sustainability-part-1'
            onClick={socialShareClickHandler}
            data-click-target='social_share'
            data-click-name='Email'
          >
            <EmailIcon round size={50} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;

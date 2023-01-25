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
            hashtag='#sustainability #sustainablepackaging'
          >
            <FacebookIcon round size={50} />
          </FacebookShareButton>
          <LinkedinShareButton url='https://ps-library.vercel.app/lessons/sustainability-part-1'>
            <LinkedinIcon round size={50} />
          </LinkedinShareButton>
          <TwitterShareButton url='https://ps-library.vercel.app/lessons/sustainability-part-1'>
            <TwitterIcon round size={50} />
          </TwitterShareButton>
          <RedditShareButton url='https://ps-library.vercel.app/lessons/sustainability-part-1'>
            <RedditIcon round size={50} />
          </RedditShareButton>
          <EmailShareButton url='https://ps-library.vercel.app/lessons/sustainability-part-1'>
            <EmailIcon round size={50} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;

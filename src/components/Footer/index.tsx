import { Caption } from '../ui/typography';

export default function Footer() {
  return (
    <div className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col items-center text-center justify-center'>
      <Caption className='border-secondary/30 bg-secondary/10 text-secondary after:bg-secondary/10' id='inprogress-caption'>
        Currently viewing the Alpha version
        <br />
        ~ Site under development ~
      </Caption>
    </div>
  );
}

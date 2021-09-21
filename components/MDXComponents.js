import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';
import ProsCard from '@/components/ProsCard';
import ConsCard from '@/components/ConsCard';
import ImageWithTheme from '@/components/ImageWithTheme';
import Step from '@/components/Step';


const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CodeCustom = (props) => <CodeBlock>{props.children}</CodeBlock>;

const MDXComponents = {
  Image,
  ImageWithTheme,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  code: CodeCustom
};

export default MDXComponents;

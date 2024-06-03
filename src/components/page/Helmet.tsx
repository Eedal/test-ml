import { Helmet as ReactHelmetAsync } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
}

function Helmet({ title, description }: Props) {
  return (
    <ReactHelmetAsync>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="/" />
    </ReactHelmetAsync>
  );
}

export default Helmet;

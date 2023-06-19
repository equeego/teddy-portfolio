import { getProject } from '@/sanity/sanity-utils';
import PortfolioDetails from '../../components/PortfolioDetails';

type Props = {
  params: { project: string };
};

export default async function SSRProject({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <PortfolioDetails project={project} />;
}

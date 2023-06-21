import { getMembers, getTeamPageContent } from "@/sanity/sanity-utils";
import TeamList from "../components/TeamList";

export default async function SSRTeam() {
  const teamsTitle = await getTeamPageContent();
  const members = await getMembers();

  return <TeamList titles={teamsTitle} members={members} />;
}

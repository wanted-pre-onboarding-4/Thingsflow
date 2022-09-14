import { IssueListInterface } from '../../../utils/IssueListInterface';

// title: string;
// number: number;
// id: number;
// created_at: Date;
// comments: number;
interface CardProps {
  issue: IssueListInterface;
}
const IssueCard = ({ issue }: CardProps) => {
  return (
    <div
      style={{
        height: '50px',
        border: 'solid black 3px',
        borderRadius: '30px',
        marginTop: '30px',
      }}
    >
      {issue.title}
    </div>
  );
};

export default IssueCard;

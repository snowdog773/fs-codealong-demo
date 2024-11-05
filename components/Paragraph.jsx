import { Typography } from "@/components/mui";

const Paragraph = ({ children, ...props }) => {
  return (
    <Typography component="p" {...props}>
      {children}
    </Typography>
  );
};

export default Paragraph;

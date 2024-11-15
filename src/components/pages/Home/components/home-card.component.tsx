import { Card, CardContent, Typography } from "@mui/material";

interface HomeCardProps {
  feature: {
    title: string;
    description: string;
  };
}

export default function HomeCard({ feature }: HomeCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
      elevation={2}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 2,
            color: "primary.dark",
          }}
        >
          {feature.title}
        </Typography>
        <Typography color="text.secondary">{feature.description}</Typography>
      </CardContent>
    </Card>
  );
}

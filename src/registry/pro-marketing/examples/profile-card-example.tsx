import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardFallback,
  ProfileCardImage,
  ProfileCardName,
} from "@/registry/pro-marketing/components/profile-card";

export function ProfileCardExample() {
  return (
    <div className="flex flex-col gap-8">
      <ProfileCard>
        <ProfileCardAvatar>
          <ProfileCardImage src="https://github.com/shadcn.png" />
          <ProfileCardFallback>CN</ProfileCardFallback>
        </ProfileCardAvatar>

        <ProfileCardDetails>
          <ProfileCardName>Sophie Tan</ProfileCardName>
          <ProfileCardBody>sophie.tan@gmail.com</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>

      <ProfileCard variant="horizontal">
        <ProfileCardAvatar size="sm">
          <ProfileCardImage src="https://github.com/shadcn.png" />
          <ProfileCardFallback>CN</ProfileCardFallback>
        </ProfileCardAvatar>

        <ProfileCardDetails>
          <ProfileCardName>Sophie Tan</ProfileCardName>
          <ProfileCardBody>4 Sept, 2025</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>

      <ProfileCard variant="vertical">
        <ProfileCardAvatar size="lg">
          <ProfileCardImage src="https://github.com/shadcn.png" />
          <ProfileCardFallback>CN</ProfileCardFallback>
        </ProfileCardAvatar>

        <ProfileCardDetails>
          <ProfileCardName>Sophie</ProfileCardName>
          <ProfileCardBody>CEO</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>
    </div>
  );
}

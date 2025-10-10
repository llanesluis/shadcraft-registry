import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardName,
} from "@/registry/pro-marketing/components/profile-card";

export function ProfileCardExample() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 lg:px-8">
      <ProfileCard>
        <ProfileCardAvatar src="https://github.com/shadcn.png" name="shadcn" />

        <ProfileCardDetails>
          <ProfileCardName>Sophie Tan</ProfileCardName>
          <ProfileCardBody>sophie.tan@gmail.com</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>

      <ProfileCard variant="horizontal">
        <ProfileCardAvatar size="sm" src="https://github.com/shadcn.png" name="shadcn" />

        <ProfileCardDetails>
          <ProfileCardName>Sophie Tan</ProfileCardName>
          <ProfileCardBody>4 Sept, 2025</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>

      <ProfileCard variant="vertical">
        <ProfileCardAvatar size="lg" src="https://github.com/shadcn.png" name="shadcn" />

        <ProfileCardDetails>
          <ProfileCardName>Sophie</ProfileCardName>
          <ProfileCardBody>CEO</ProfileCardBody>
        </ProfileCardDetails>
      </ProfileCard>
    </div>
  );
}

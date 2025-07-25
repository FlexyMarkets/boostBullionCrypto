import { Stack, Container, Typography } from "@mui/material";
import ImportantNoticeAboutTransactionPassword from "./importantNoticeAboutTransactionPassword/ImportantNoticeAboutTransactionPassword.jsx";
import SetTransactionPasswordForm from "./setTransactionPasswordForm/SetTransactionPasswordForm";

function SetTransactionPassword() {
  return (
    <Stack mt={"100px"}>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Set Transaction Password</Typography>
      {/* <ImportantNoticeAboutTransactionPassword /> */}
      <SetTransactionPasswordForm />
    </Stack>
  )
}

export default SetTransactionPassword;
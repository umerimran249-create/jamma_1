Import-Module ExchangeOnlineManagement

Write-Host "Connecting to Exchange Online..."
Write-Host "A browser sign-in window should open. Sign in as Global Admin."
Connect-ExchangeOnline -DisableWAM -ShowBanner:$false

try {
  New-ServicePrincipal `
    -AppId "8b5d86f1-df2b-4e7a-9af0-df4139ef37f5" `
    -ObjectId "37074f52-3d1e-406d-b5f5-f612d15e8f09" `
    -DisplayName "Jamaa Global Website Email" `
    -ErrorAction Stop
  Write-Host "Service principal created."
} catch {
  Write-Host ("New-ServicePrincipal note: " + $_.Exception.Message)
}

$sp = Get-ServicePrincipal | Where-Object { $_.AppId -eq "8b5d86f1-df2b-4e7a-9af0-df4139ef37f5" }
if (-not $sp) {
  throw "Service principal not found after registration attempt."
}

Write-Host "SERVICE_PRINCIPAL:"
$sp | Format-List AppId, ObjectId, Identity, DisplayName, ServiceId

Add-MailboxPermission `
  -Identity "partner@jamaaglobal.com" `
  -User $sp.Identity `
  -AccessRights FullAccess `
  -ErrorAction Stop

Write-Host "MAILBOX_PERMISSION_OK"
Get-MailboxPermission -Identity "partner@jamaaglobal.com" |
  Where-Object { $_.IsInherited -eq $false } |
  Format-Table User, AccessRights, Deny -AutoSize

Disconnect-ExchangeOnline -Confirm:$false

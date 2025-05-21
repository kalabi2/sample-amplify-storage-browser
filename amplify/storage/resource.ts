import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'dedicated-switch-bucket',
  isDefault: true,
   access: (allow) => ({
    'switch-folder/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
   })
});




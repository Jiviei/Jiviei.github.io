---
order: 3
title: GitLab
---

To connect GitLab, you only need to provide storage information: the server URL and access token. The user name and email will be filled in automatically.

![GitLab Integration](./gitlab.png)

:::tip:true How to create a GitLab token for repository access?

1. Request access to the repository from the administrator with permissions no lower than *Developer*.

2. Go to GitLab and click *Edit profile*.

3. In the left panel, click *Access Token*, then *Add new token*.

4. Fill in the fields:

   -  *Token name* -- specify any name, for example, `Gramax`.

   -  *Expiration date* -- clear the field to make the token permanent.

   -  *Select scopes* -- check *read_api* and *write_repository*.

5. Click *Create personal access token* and copy the token. Note: the token is displayed only once -- after creation, save it for future use.

6. Paste the token into the storage addition field in Gramax.

You can view the official GitLab documentation [here](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).

:::
# drf-react-aws-deployment

## How to run the project locally

### Initialize the DB

Here we used PostgreSQL as the DB. To run our project locally, we have to setup PostgreSQL first. You can follow the following steps:

1. Download the PostgreSQL from [**here**](https://www.postgresql.org/download/) for the OS you're using. You can choose the PostgreSQL version **14 or above**.
2. Now you can open the **pgAdmin App**.
3. From the left sidebar, you can click on **Servers** > **PostgreSQL 14** > **Databases**.
4. Now click right mouse button on **Databases** and select **Create** > **Database** from the list. A modal will open.
5. Provide the name of the database. We used **`api`** as the name. You can use other name. **But, remember you have to use that name in the .env file in later section.**
6. Select the owner. **Remeber, you have to provide the password of that owner while accessing the database**.
7. And **Save**. Our DB is ready to use.

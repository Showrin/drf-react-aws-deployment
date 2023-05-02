# drf-react-aws-deployment

## How to run the Backend App locally

### Initialize the DB

Here we used PostgreSQL as the DB. To run our project locally, we have to setup PostgreSQL first. You can follow the following steps:

1. Download the PostgreSQL from [**here**](https://www.postgresql.org/download/) for the OS you're using. You can choose the PostgreSQL version **14 or above**.
2. Now you can open the **pgAdmin App**.
3. From the left sidebar, you can click on **Servers** > **PostgreSQL 14** > **Databases**.
4. Now click right mouse button on **Databases** and select **Create** > **Database** from the list. A modal will open.
5. Provide the name of the database. We used **`api`** as the name. You can use other name. **But, remember you have to use that name in the .env file in later section.**
6. Select the owner. **Remeber, you have to provide the password of that owner while accessing the database**.
7. And **Save**. Our DB is ready to use.

### Setup Virtual Environment for backend

We've used Python in our backend app. To run the backend server, we've to create a virtual environment first. Run the following commands.

```
cd ./backend/

py -3 -m venv .venv
```

After running these commands, a virtual environment will be created in this location -> `/backend/.venv`. Now we have to activate the environment from the terminal. Run the following command (make sure you're in the `backend` directory).

```
./.venv/Scripts/activate
```

Our virtual env will be started. Then we have to install all the packages that are being used in our backend app.

```
pip install -r requirements.txt
```

The above command will install all the packages mentioned in `requirements.txt` file. And our environment is ready to use.

### Declare Environment Variables

Now, we've to define all of our environment variables used in our backend app. We can get all the variables from the `.env.example` file.

1. First, we've to create a file `.env`.
2. Copy all the variables inside `.env.example` file and paste them in `.env` file.
3. Now, populate these variables with proper value.

### Migrating our Database

We're just one step behind to run our app. We've created our database in an earlier step. But our DB is now empty.

1. So we've to create necessary tables. To do that, run the following command.

   ```
   python manage.py migrate
   ```

2. Then we have to populate our table with some initial data. Run the following command for seeding data.

   ```
   python manage.py loaddata seeds/quotes.json
   ```

   This will populate some quotes in the quotes table.

### Run the project :rocket:

Finally, we're ready to run the backend. Run the following command.

```
python manage.py runserver
```

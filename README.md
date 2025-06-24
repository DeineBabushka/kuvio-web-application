
# How to install Kuvio on your device!

## Requirements

>Docker

- For Windows:
	- Install and run Docker Desktop - https://docs.docker.com/desktop/setup/install/windows-install/

- For Linux:
	- Pick your respective distribution and Install Docker with the help of this https://docs.docker.com/desktop/setup/install/linux/
	- Install the Docker Compose Plugin with the help of this https://docs.docker.com/compose/install/linux/

 >Git

- For Windows:
	- Install git with the help of this https://git-scm.com/downloads/win

- For Linux:
	- Install git with the help of this https://git-scm.com/downloads/linux

# Installing Kuvio

Open your Terminal/Command Line

Make sure you have no Instances or applications listening on Port 4200, 3000, 27017 and 3306.

Make sure you don't have any Existing Kuvio related Instances running.

Clone the following repository:

```bash
git clone https://gitlab.ai.it.hs-worms.de/fullstack-webapplications-sose-2025/group-n/kuvio-release
```

Switch to the new Directory and execute the following:

```bash
cd kuvio-release
docker-compose up -d --build
```

After the Setup is finished open http://localhost:4200

✨ Congrats, you installed Kuvio! ✨

# Removing Kuvio 😢

in the kuvio-release directory, execute the following:

```bash
docker-compose down -v
# If you wish to delete all User Data
rm -r *data
```

You removed Kuvio 🥺😭
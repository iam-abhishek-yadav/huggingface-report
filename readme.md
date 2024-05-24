### Hugging Face Report Generator

This project fetches the top 10 downloaded models from the Hugging Face model hub and generates a report in the same directory.

#### How to Run

To run the report generator, you need to have Docker installed on your machine.

1. Clone this repository to your local machine:

```bash
git clone https://github.com/iam-abhishek-yadav/huggingface-report.git
```

2. Navigate to the project directory.

```bash
cd huggingface-report
```

3. Build and run the Docker container.

```bash
docker build -t report .
docker run --rm -v $(pwd):/app report
```

#### Or just use this command

```bash
docker run --rm -v $(pwd):/app abhishekr1/report
```

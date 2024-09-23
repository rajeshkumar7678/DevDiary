export let data = {
  message: "Blogs fetched successfully",
  blogs: [
    {
      _id: "66eee11f487e45cf27d2ecfb",
      title: "Understanding JavaScript Closures",
      content:
        "<h2>What are Closures?</h2><p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)...</p>",
      author: "John Doe",
      tags: [Array],
      createdAt: "2024-09-21T15:07:11.580Z",
      updatedAt: "2024-09-21T15:07:11.580Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee182487e45cf27d2ecfe",
      title: "Introduction to Asynchronous JavaScript",
      content:
        "<h2>Understanding Asynchronous Programming</h2><p>Asynchronous JavaScript allows non-blocking operations, making it possible to run long-lasting tasks while the rest of the code continues to execute.</p><h3>Callbacks, Promises, and Async/Await</h3><p>JavaScript handles asynchronous operations through callbacks, promises, and async/await.</p><pre><code>async function fetchData() { \n" +
        " const response = await fetch('https://api.example.com/data'); \n" +
        " const data = await response.json(); \n" +
        " console.log(data); \n" +
        "}</code></pre><p>In this example, we use async/await to make API requests in a cleaner and more readable way.</p>",
      author: "Jane Doe",
      tags: [Array],
      createdAt: "2024-09-21T15:08:50.424Z",
      updatedAt: "2024-09-21T15:08:50.424Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee18e487e45cf27d2ed00",
      title: "A Deep Dive into Node.js Streams",
      content:
        "<h2>What are Streams in Node.js?</h2><p>Streams are a powerful concept in Node.js for handling I/O efficiently. They allow you to work with large datasets by processing them piece by piece, rather than loading everything into memory.</p><h3>Types of Streams</h3><ul><li><b>Readable streams:</b> Allow you to read data in chunks.</li><li><b>Writable streams:</b> Allow you to write data in chunks.</li></ul><pre><code>const fs = require('fs'); \n" +
        "const readableStream = fs.createReadStream('file.txt'); \n" +
        "readableStream.on('data', chunk => { \n" +
        " console.log(chunk.toString()); \n" +
        "});</code></pre><p>This example shows how you can use a readable stream to process file data in chunks.</p>",
      author: "Alice Johnson",
      tags: [Array],
      createdAt: "2024-09-21T15:09:02.347Z",
      updatedAt: "2024-09-21T15:09:02.347Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee199487e45cf27d2ed02",
      title: "Mastering CSS Flexbox",
      content:
        "<h2>What is Flexbox?</h2><p>CSS Flexbox is a layout model that allows elements to align and distribute space within a container efficiently.</p><h3>Key Flexbox Properties</h3><ul><li><b>display: flex;</b> Activates Flexbox on a container.</li><li><b>justify-content:</b> Aligns items horizontally.</li><li><b>align-items:</b> Aligns items vertically.</li></ul><pre><code>.container { \n" +
        " display: flex; \n" +
        " justify-content: center; \n" +
        " align-items: center; \n" +
        "}</code></pre><p>This example centers items both horizontally and vertically within a Flexbox container.</p>",
      author: "Michael Lee",
      tags: [Array],
      createdAt: "2024-09-21T15:09:13.552Z",
      updatedAt: "2024-09-21T15:09:13.552Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee1a1487e45cf27d2ed04",
      title: "Getting Started with React Hooks",
      content:
        "<h2>What are React Hooks?</h2><p>React Hooks allow you to use state and other React features without writing a class.</p><h3>Commonly Used Hooks</h3><ul><li><b>useState:</b> Manages state in a functional component.</li><li><b>useEffect:</b> Runs side effects after rendering.</li></ul><pre><code>const [count, setCount] = useState(0); \n" +
        "useEffect(() => { \n" +
        " document.title = `You clicked ${count} times`; \n" +
        "}, [count]);</code></pre><p>This example demonstrates using <code>useState</code> to manage state and <code>useEffect</code> to update the document title based on the current state.</p>",
      author: "Sophia Brown",
      tags: [Array],
      createdAt: "2024-09-21T15:09:21.193Z",
      updatedAt: "2024-09-21T15:09:21.193Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee1ae487e45cf27d2ed06",
      title: "How to Optimize Web Performance",
      content:
        "<h2>Why Web Performance Matters</h2><p>Optimizing web performance improves the user experience, reduces bounce rates, and increases SEO rankings.</p><h3>Best Practices for Web Performance</h3><ul><li><b>Minify CSS and JavaScript:</b> Reduces file sizes and load times.</li><li><b>Use Lazy Loading:</b> Loads images and content only when they are visible in the viewport.</li><li><b>Cache Assets:</b> Use caching to store frequently used assets and reduce server load.</li></ul><p>These techniques help speed up your website, providing a smoother experience for users.</p>",
      author: "Tom Black",
      tags: [Array],
      createdAt: "2024-09-21T15:09:34.417Z",
      updatedAt: "2024-09-21T15:09:34.417Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee1f0487e45cf27d2ed08",
      title: "Introduction to Python Decorators",
      content:
        "<h2>What are Python Decorators?</h2><p>Decorators are a way to modify the behavior of a function or method in Python. They are usually applied as functions that wrap another function to extend or alter its behavior.</p><h3>Example of a Simple Decorator</h3><pre><code>def my_decorator(func): \n" +
        "    def wrapper(): \n" +
        "        print('Something is happening before the function is called.') \n" +
        "        func() \n" +
        "        print('Something is happening after the function is called.') \n" +
        "    return wrapper \n" +
        "\n" +
        "@my_decorator \n" +
        "def say_hello(): \n" +
        "    print('Hello!')</code></pre><p>In this example, the <code>say_hello</code> function is wrapped by <code>my_decorator</code>, adding extra functionality before and after the main function.</p>",
      author: "Anna Greene",
      tags: [Array],
      createdAt: "2024-09-21T15:10:40.835Z",
      updatedAt: "2024-09-21T15:10:40.835Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee1fa487e45cf27d2ed0a",
      title: "Mastering Ruby on Rails Associations",
      content:
        "<h2>What are Associations in Ruby on Rails?</h2><p>In Ruby on Rails, associations allow models to communicate with each other. This includes relationships such as one-to-many, many-to-many, and one-to-one.</p><h3>Types of Associations</h3><ul><li><b>has_many:</b> One object can have many associated objects.</li><li><b>belongs_to:</b> Defines a single object that the current object is related to.</li></ul><pre><code>class Post < ApplicationRecord \n" +
        "  has_many :comments \n" +
        "end \n" +
        "class Comment < ApplicationRecord \n" +
        "  belongs_to :post \n" +
        "end</code></pre><p>This example demonstrates how a <code>Post</code> model can have many <code>Comment</code> objects, and each <code>Comment</code> belongs to one <code>Post</code>.</p>",
      author: "Lucas Martin",
      tags: [Array],
      createdAt: "2024-09-21T15:10:50.987Z",
      updatedAt: "2024-09-21T15:10:50.987Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee209487e45cf27d2ed0c",
      title: "Getting Started with Docker Containers",
      content:
        "<h2>What is Docker?</h2><p>Docker is an open platform that helps developers to create, deploy, and run applications in isolated containers.</p><h3>Basic Docker Commands</h3><ul><li><b>docker build:</b> Builds a Docker image from a Dockerfile.</li><li><b>docker run:</b> Runs a container from an image.</li><li><b>docker ps:</b> Lists running containers.</li></ul><pre><code>docker build -t myapp . \n" +
        "docker run -p 4000:4000 myapp</code></pre><p>In this example, a Docker image is built from a project and then run, exposing it on port 4000.</p>",
      author: "David James",
      tags: [Array],
      createdAt: "2024-09-21T15:11:05.726Z",
      updatedAt: "2024-09-21T15:11:05.726Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee240487e45cf27d2ed0e",
      title: "Understanding Kubernetes: A Beginner’s Guide",
      content:
        "<h2>What is Kubernetes?</h2><p>Kubernetes, also known as K8s, is an open-source system for automating the deployment, scaling, and management of containerized applications.</p><h3>Basic Kubernetes Components</h3><ul><li><b>Pods:</b> The smallest deployable unit in Kubernetes, representing one or more containers.</li><li><b>Nodes:</b> Machines that run your pods, either virtual or physical.</li><li><b>Services:</b> A Kubernetes object that exposes an application running on a set of Pods.</li></ul><pre><code>kubectl get pods \n" +
        "kubectl apply -f deployment.yaml</code></pre><p>This example shows basic commands for interacting with Kubernetes to view pods and apply configurations from a YAML file.</p>",
      author: "Samantha Brown",
      tags: [Array],
      createdAt: "2024-09-21T15:12:00.419Z",
      updatedAt: "2024-09-21T15:12:00.419Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee257487e45cf27d2ed10",
      title: "Building Serverless Applications with AWS Lambda",
      content:
        "<h2>What is AWS Lambda?</h2><p>AWS Lambda is a serverless compute service that allows you to run code without provisioning or managing servers.</p><h3>Benefits of AWS Lambda</h3><ul><li>Automatic scaling</li><li>Pay only for what you use</li><li>Integration with other AWS services</li></ul><pre><code>exports.handler = async (event) => { \n" +
        "    const response = { \n" +
        "        statusCode: 200, \n" +
        "        body: JSON.stringify('Hello from Lambda!'), \n" +
        "    }; \n" +
        "    return response; \n" +
        "};</code></pre><p>This simple Lambda function responds with a message when triggered.</p>",
      author: "Oliver Black",
      tags: [Array],
      createdAt: "2024-09-21T15:12:23.235Z",
      updatedAt: "2024-09-21T15:12:23.235Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee260487e45cf27d2ed12",
      title: "Optimizing PostgreSQL Queries for Performance",
      content:
        "<h2>Improving Query Performance in PostgreSQL</h2><p>Optimizing PostgreSQL queries is crucial for handling large datasets efficiently. Here are some tips to improve performance.</p><h3>Tips for Query Optimization</h3><ul><li>Use indexes on columns that are frequently searched.</li><li>Avoid SELECT * in favor of selecting only the necessary columns.</li><li>Use <code>EXPLAIN</code> to analyze your queries.</li></ul><pre><code>EXPLAIN SELECT id, name FROM users WHERE email = 'test@example.com';</code></pre><p>This example uses the <code>EXPLAIN</code> command to analyze the query plan and identify potential bottlenecks.</p>",
      author: "Grace Miller",
      tags: [Array],
      createdAt: "2024-09-21T15:12:32.307Z",
      updatedAt: "2024-09-21T15:12:32.307Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee269487e45cf27d2ed14",
      title: "Getting Started with GraphQL",
      content:
        "<h2>What is GraphQL?</h2><p>GraphQL is a query language for APIs that allows clients to request exactly the data they need, and nothing more.</p><h3>Key Features of GraphQL</h3><ul><li>Flexible queries</li><li>Single endpoint for all operations</li><li>Strongly typed schema</li></ul><pre><code>{ \n" +
        "  user(id: 1) { \n" +
        "    name \n" +
        "    email \n" +
        "    posts { \n" +
        "      title \n" +
        "    } \n" +
        "  } \n" +
        "}</code></pre><p>This example shows a basic GraphQL query to fetch a user’s name, email, and their posts from a server.</p>",
      author: "Robert Wilson",
      tags: [Array],
      createdAt: "2024-09-21T15:12:41.926Z",
      updatedAt: "2024-09-21T15:12:41.926Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
    {
      _id: "66eee273487e45cf27d2ed16",
      title: "Introduction to Apache Kafka for Distributed Systems",
      content:
        "<h2>What is Apache Kafka?</h2><p>Apache Kafka is a distributed streaming platform that allows you to publish, subscribe, and process data streams in real time.</p><h3>Kafka Use Cases</h3><ul><li>Real-time analytics</li><li>Event-driven architectures</li><li>Message queuing</li></ul><pre><code>bin/kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092</code></pre><p>This example command starts a Kafka producer, which sends messages to the specified topic.</p>",
      author: "Henry Taylor",
      tags: [Array],
      createdAt: "2024-09-21T15:12:51.012Z",
      updatedAt: "2024-09-21T15:12:51.012Z",
      comments: [],
      __v: 0,
      timeToRead: 1,
    },
  ],
};

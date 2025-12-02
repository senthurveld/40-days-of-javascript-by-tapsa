# Day 08 - 40 Days of JavaScript

## **🎯 Goal of This Lesson**

- ✅ Welcome to Module 2
- ✅ Why Execution Context
- ✅ Lexical Environment
- ✅ Execution Context
- ✅ Global Execution Context
- ✅ Function Execution Context
- ✅ GEC and FEC With Complex Examples
- ✅ Memory Management With Call Stack and Heap
- ✅ Task for YOU!

## 🫶 Support

Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

  > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work

I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Cofee](https://buymeacoffee.com/tapasadhikary)**.

## Video

Here is the video for you to go through and learn:

[![day-08](./banner.png)](https://youtu.be/ylx5F7hbzVQ "Video")

## **👩‍💻 🧑‍💻 Assignment Tasks**

Please find the task assignments in the [Task File](./task.md).

#Answer to TASK
Create the GEC and FEC with CP and EP flow

```
    GEC:
        CP:
            -message: undefined;
            -sum() in memory
            -mul() in m..
            -calc() in m..
            -getResult() in m
        EP:
            -message: "I can do it";
                FEC:getResult()
                    CP:
                        -getResult(a,b):undefined
                        -calc() undefined
                    EP:
                        -getResult(8,5)
                        -calc(a,b)
                            FEC: calc()
                                CP:
                                    -sum() undefined
                                    -mul() undefined
                                EP:
                                    -sum(a,b) +
                                    -mul(a,b) /2
                                        FEP: sum(), mul()
                                        CP:
                                            -result: undefined
                                        EP:
                                            -result(a+b);
                                            -result(a*b);

```

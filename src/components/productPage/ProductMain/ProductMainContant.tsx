import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogData {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: [];
  createdAt: string;
  updatedAt: string;
  comments: [];
  __v: 0;
  timeToRead: 1;
}

export default function ProductMainContant({
  blogData,
}: {
  blogData: BlogData[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogData.map((card: BlogData, index: number) => (
        <div key={index}>
          <Card>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>Autor:-{card.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="h-40 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: card.content }}
              />
            </CardContent>
            <CardFooter className="flex flex-wrap">
              {card.tags.map((tag: string) => (
                <div className="px-4" key={tag}>
                  {tag}
                </div>
              ))}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

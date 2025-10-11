import Image from "next/image";
import React from "react";

interface AuthorBioProps {
  name: string;
  bio: string;
  image?: string;
  twitter?: string;
  linkedin?: string;
}

export function AuthorBio({ name, bio, image, twitter, linkedin }: AuthorBioProps) {
  return (
    <div className="mt-8 flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4">
      {image ? (
        <Image src={image} alt={name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
      ) : (
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
      )}
      <div>
        <div className="font-semibold">{name}</div>
        <p className="mt-1 text-sm text-text-secondary">{bio}</p>
        <div className="mt-2 flex gap-3 text-sm text-green-600">
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}



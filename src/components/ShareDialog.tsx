import * as React from "react";
import { Dialog } from "radix-ui";
import {
  Cross2Icon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/Button";
import { copyText } from "../lib/copyText";

const ShareDialog = ({
  shareUrl,
  open,
  onOpenChange,
}: {
  shareUrl: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog.Root onOpenChange={onOpenChange} open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed bg-white left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          Share
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
          Post your link on X or LinkedIn, or copy it below.
        </Dialog.Description>
        {shareUrl && (
          <div className="flex gap-3 mb-[15px]">
            <Button
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              color="secondary"
            >
              <TwitterLogoIcon />
              <span className="uppercase hidden md:inline pr-3">X</span>
            </Button>
            <Button
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              color="secondary"
            >
              <LinkedInLogoIcon />
              <span className="uppercase hidden md:inline pr-3">LinkedIn</span>
            </Button>
          </div>
        )}
        <fieldset className="mb-[15px] flex items-center gap-5">
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="name"
            defaultValue={shareUrl ?? ""}
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              className="cursor-pointer inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none"
              onClick={() => {
                if (shareUrl) {
                  copyText(shareUrl);
                }
              }}
            >
              Copy
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="cursor-pointer absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ShareDialog;

import { StoryblokCMS } from "@/utils/cms";

export default async function NotFound() {
  const currentConfig = await StoryblokCMS.getConfig();
  console.log("404", currentConfig);
  //Fetch the 404 page from storyblok (this component works as server component aswell)
  //update this component to render a 404 page
  return (
    <div>
      <h1>{currentConfig?.notFoundTitle} </h1>
      <p> {currentConfig?.notFoundText} </p>
    </div>
  );
}

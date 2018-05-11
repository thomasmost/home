import * as React from 'react';

interface IProjectBlockProps {
   title:string;
   imageUrl:string;
   description: string;
   link?:string;
}

var projectHeader = (title: string, imageUrl: string) => <div>
      <img className="project-image" src={imageUrl} />
      <div className="project-title">{title}</div>
   </div>

export const ProjectBlock = (props: IProjectBlockProps) => <div className="project">
   {props.link ? <a href={props.link} target="_blank">{projectHeader(props.title, props.imageUrl)}</a> : <div>{projectHeader(props.title, props.imageUrl)}</div>}
</div>


import React from "react";
import {Rules} from "../components/Rules";
import {RulesTask} from "../components/RulesTask";

import "./Rules.less";

export default (props) =>
  (<div className="main-panel rules-section">
    <div className="container text-center my-5">
      <h1>General Rules</h1>
      <div>
        <h2>
          Immediate Rejection
        </h2>
        <p>Not respecting one or more of the rules below will lead to direct rejection of your contribution.</p>
      </div>

      <div>
        <h2>
          Temporary / Lifetime Bans - Utopian Downvote
        </h2>
        <p>
          Utopian may ban your account temporarily or for the lifetime and may also proceed for a downvote in any of the following cases.
        </p>
        <li>
          Any user found harassing a member of the Utopian Moderators or in general any member of the Utopian teams.
        </li>
        <li>
          Using multiple accounts to clearly abuse the system.
        </li>
        <li>
          Keep contributing with low quality contributions even after being notified.
        </li>
        <li>
          Plagiarism.
        </li>
        <li>
          Using Licensed or commercial materials or Creative Commons without citing the source even after being notified.
        </li>
        <li>
          Tag spamming.
        </li>
      </div>

      <div>
        <h2>
          Commercial/Copyrighted Materials
        </h2>
        <p>No commercial or copyrighted material should ever be used in a contribution.</p>
        <ul>
          <li>
            Only Creative Commons for Images and Videos can be accepted and the source should be always cited.
          </li>
          <li>
            You retain full responsibility when using copyrighted or commercial materials without proper permission.
          </li>
        </ul>
      </div>

      <div>
        <h2>Contributions must be Formal and Professional</h2>
        <p>A moderator may reject a contribution if it is not written in a formal and professional style.</p>
        <ul>
          <li>
            The contributor should follow the templates provided in the editor for each category.
          </li>
          <li>
            The writing style should be formal never informal.
          </li>
          <li>
            The writing style should be professional.
          </li>
          <li>
            Sentences like: <em>Hello Utopians</em>, <em>Hello Steemians</em>, <em>Dear friends</em> and similar informal sentences will lead to rejection.
          </li>
          <li>Sentences like <em>resteem, follow, upvote</em> will lead to immediate rejection.</li>
          <li>
            Quality of the images and videos used in the contribution should be high. Low res images and videos will be rejected.
          </li>
          <li>
            A contribution with bad grammar will be rejected if the contents may be really hard to understand.
          </li>
        </ul>
      </div>

      <div>
        <h2>Contributions must be Informative</h2>
        <p>
          The contribution must contain as much detail as possible and have some graphical content in it (images, charts, videos, etc) where applicable. The length of the body of the contribution should be enough to give every possible detail about the submitted contribution.
        </p>
      </div>

      <div>
        <h2>Contributions must be in English</h2>
        Contents of the contributions (post content) must be in plain English and fully understandable. The only accepted exceptions are:
        <ul>
          <li>Contributions under the Tutorials, Video Tutorials Category and Blog posts.</li>
        </ul>
      </div>

      <div>
        <h2>Never Submitted Before</h2>
        <p>
          Contributions must be unique. Users must first check if the same or very similar contribution has been submitted before.</p>
        <ul>
          <li>Same contributions will never be accepted in Utopian twice by the same or different user.</li>
          <li>Contents already shared on the Steem blockchain in general may still be rejected if submitted in Utopian.</li>
          <li>Contents already shared anywhere else may still be rejected if submitted in Utopian.</li>
          <li>Same contents already shared before in Utopian or anywhere else by different users may still be rejected if a moderator recognises plagiarism.</li>
        </ul>
      </div>

      <div>
        <h2>Author of the Contribution</h2>
        <p>
          The contribution must provide as much detail as possible to verify the actual work done and that you are the author.
        </p>
        <li>If your Steem/Utopian username does not match with the username used in an external platform, you must either edit the username in the external platform or provide an immediate way to verify you are the author.</li>
      </div>

      <div>
        <h2>Contributions Must Not Contain Spam</h2>
        <p>
          The contribution should not contain any clear attempt to profit solely from a commercial perspective, and should not be written in a way that suggests the contributor is looking to maximise the returns.
        </p>
        <li>The author may provide links to his social profiles in a way that does not disturb the reader.</li>
        <li>Links to commercial products are forbidden.</li>
        <li>Misusing the mentions by mentioning other Steem/Utopian users without an obvious reason will lead to rejection.</li>
      </div>

      <div>
        <h2>Contributions Must Not Contain Defamation</h2>
        <p>
          Contributions must not use namecalling directed at other users of the Steem blockchain. Contributions may not contain false information about another user that may be perceived as defamatory.
        </p>
      </div>


      <div>
        <h2>Contributions Should Not Solicit for Unrelated Activities</h2>
        <li>
          Contributors should not ask for Steem/Steemit related activities in their posts, such as upvotes, resteems and follows.
        </li>
        <li>
          Contributors should not ask for Utopian related activities in their posts, such as upvotes and follows.
        </li>
        <li>
          Contributors should not solicit for any activity in general that it is not strictly accepted by the Utopian Rules.
        </li>
        <li>
          Contributors should not ask for witness votes in their Utopian posts.
        </li>
      </div>

      <div>
        <h2>
          Unvoting - Rejection After Approval
        </h2>
        <p>Utopian can unvote or reject an accepted contribution if it is found out that the contribution did not meet the rules and had been upvoted by mistake. This decision considers cases such as attempts of plagiarism, copying work and ideas of others or other violation of the rules which would be obvious to see that the contribution does not deserve the reward.</p>
      </div>

      <div>
        <h2>
          Github Repository
        </h2>
        <p>
          The linked Github repository must always contain code, a README and a license.
        </p>
        <ul>
          <li>
            Contributions for un-official repositories will only be accepted if present in <a href="https://docs.google.com/spreadsheets/d/1RMQyfqKRmgeIWPM80h31hS1NdLxqLJ6qy3I5ucNGuuc/edit?usp=sharing">Utopian un-official repos whitelist</a>
          </li>
          <li>
            Contributions on <b>official</b> repositories that are mirrors of another subversioning system are always accepted.
          </li>
          <li>
            Contributions on repositories that had no updates for <b>longer than 1 year</b>, will be rejected.
          </li>
          <li>
            Contributions on forks that do not have any difference/improvement from the original project won't be accepted.
          </li>
        </ul>
      </div>

      <div>
        <h1>Categories Rules</h1>
        <div><Rules inEditor={false} type="ideas" /></div>
        {/*<div><Rules inEditor={false} type="sub-projects" /></div>*/}
        <div><Rules inEditor={false} type="development" /></div>
        <div><Rules inEditor={false} type="bug-hunting" /></div>
        <div><Rules inEditor={false} type="translations" /></div>
        <div><Rules inEditor={false} type="graphics" /></div>
        <div><Rules inEditor={false} type="analysis" /></div>
        <div><Rules inEditor={false} type="social" /></div>
        <div><Rules inEditor={false} type="documentation" /></div>
        <div><Rules inEditor={false} type="tutorials" /></div>
        <div><Rules inEditor={false} type="video-tutorials" /></div>
        <div><Rules inEditor={false} type="copywriting" /></div>
        <div><Rules inEditor={false} type="blog" /></div>
      </div>

      <div>
        <br />
        <h1>Task Requests</h1>
        <li>Task requests are meant to be made by the project owner when looking for contributions.</li>
        <li>A task must be explained in great detail and provide all the necessary details for it to actually be completed. In one task request, there should not be more than one task; and if more, they must be related to the category where the task request is being submitted.</li>
        <li>Generic task requests, like "We are looking for contributors" won't be accepted.</li>
        <li>Moderators may ask that you change a task request, if it does not meet the rules.</li>
        <li>You should always provide contact details for the contributor to get in touch with you.</li>
        <li>You should always define a deadline.</li>

        <div>
          <div><RulesTask inEditor={false} type="task-ideas" /></div>
          <div><RulesTask inEditor={false} type="task-development" /></div>
          <div><RulesTask inEditor={false} type="task-bug-hunting" /></div>
          <div><RulesTask inEditor={false} type="task-translations" /></div>
          <div><RulesTask inEditor={false} type="task-graphics" /></div>
          <div><RulesTask inEditor={false} type="task-documentation" /></div>
          <div><RulesTask inEditor={false} type="task-analysis" /></div>
          <div><RulesTask inEditor={false} type="task-social" /></div>
        </div>
      </div>

      <div>
        <h1>Moderation</h1>
        <ul>
          <li>Utopian Moderators/Supervisors have full rights to reject or accept a contribution.</li>
          <li>Supervisors may always revert an accepted/rejected contribution.</li>
        </ul>

        <div>
          <h2>Application as an Utopian Moderator</h2>
          <ul>
            <li>
              You must write a public Steemit post proposing his intentions, one category or more related categories he would like to moderate, his field of expertise and should nominate one existing Supervisor.
            </li>
            <li>
              The public Steemit post must be pasted in the channel <a href="https://discord.gg/Ddj8SJf" target="_blank">#mod-applicant on Discord</a>
            </li>
          </ul>
          <div>
            <h3>
              Related Categories
            </h3>
            <p>A moderator may only apply for one category or more as long as they have related know-how</p>
            <ul>
              <li>
                Suggestions
              </li>
              <li>
                Translations
              </li>
              <li>
                Graphics
              </li>
              <li>
                Development - Bug Hunting
              </li>
              <li>
                Analysis
              </li>
              <li>
                Documentation
              </li>
              <li>
                Tutorials - Video Tutorials
              </li>
              <li>
                Copywriting
              </li>
            </ul>
          </div>
          <div>
            <h3>Losing Moderation Rights</h3>
            <p>
              A Moderator will have to step back if the majority of the other Moderators/Supervisors/Advisors/Overseers believe the position should be left or if the Supervisor assigned to him opts for that.
            </p>
          </div>
        </div>

        <div>
          <h2>Application as an Utopian Supervisor</h2>
          <ul>
            <li>Supervisors will only be accepted if they have moderated at least 600 contributions and being active since at least 2 months.</li>
            <li>Supervisors must have a proved strong general know-how of the Utopian platform and its categories.</li>
            <li>Supervisors should always check the work of their teams and make sure work on other teams is proceeding correctly.</li>
            <li>Supervisors must have a weekly public review of the work of their teams.</li>
          </ul>
          <div>
            <h3>Losing Supervisor Rights</h3>
            <p>A Supervisor will have to step back if the majority of the other Supervisors/Advisors/Overseers believe the position should be left.</p>
          </div>
        </div>
      </div>

      <div>
        <h2>
          See our FAQ
        </h2>
        <p>
          Click <b><a href="/faq">here</a></b> to view our <em>Frequently Asked Questions</em> (FAQ) page, where we detail the most asked questions and their answers.
        </p>
      </div>

    </div>
  </div>);

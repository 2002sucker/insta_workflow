// components/DmConfig.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

// Define the type for a feature item
interface FeatureToggleProps {
  label: string;
  isPro?: boolean;
}

// Reusable FeatureToggle component
function FeatureToggle({ label, isPro = false }: FeatureToggleProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
      <span className="text-sm">{label}</span>
      <div className="flex items-center space-x-2">
        {isPro && (
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            PRO
          </span>
        )}
        <Switch />
      </div>
    </div>
  );
}

interface DmConfigProps {
  onOpeningDmChange: (dm: string) => void;
  onOpeningDmEnabledChange: (enabled: boolean) => void;
  onFollowUpDmChange: (dm: string) => void;
}

export function DmConfig({
  onOpeningDmChange,
  onOpeningDmEnabledChange,
  onFollowUpDmChange,
}: DmConfigProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">They will get</h2>

        {/* Opening DM Section */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium">Opening DM</h3>
          <Switch defaultChecked onCheckedChange={onOpeningDmEnabledChange} />
        </div>
        <Textarea
          placeholder="Hey there! I'm so happy you're here..."
          className="bg-gray-800 border-gray-700"
          rows={4}
          defaultValue="Hey there! I'm so happy you're here, thanks so much for your interest 😊. Click below and I'll send you the link in just a sec ✨"
          onChange={(e) => onOpeningDmChange(e.target.value)}
        />
        <a
          href="#"
          className="text-sm text-blue-400 mt-2 block hover:underline"
        >
          Why does an Opening DM matter?
        </a>

        {/* Follow-up Message Section (as seen in the video) */}
        <div className="mt-4">
          <Textarea
            id="follow-up-dm"
            placeholder="Write a message"
            className="bg-gray-800 border-gray-700 mt-2"
            rows={3}
            defaultValue="Hey"
            onChange={(e) => onFollowUpDmChange(e.target.value)}
          />
          <p className="text-xs text-gray-400 mt-1">
            The message the DM you'd like to send
          </p>
          <Button variant="outline" className="w-full mt-3">
            + Add A Link
          </Button>
        </div>
      </div>

      {/* More things to automate section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">More things to automate</h2>
        <div className="space-y-2">
          <FeatureToggle label="Reply under the post so people feel special" />
          <FeatureToggle
            label="Set up a follow-up to re-engage and build trust"
            isPro
          />
          <FeatureToggle
            label="Automatically ask for a follow to grow your audience"
            isPro
          />
          <FeatureToggle
            label="Capture emails in DMs to keep in touch beyond social"
            isPro
          />
        </div>
      </div>
    </div>
  );
}
